import React from "react";

import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";



function App() {

  const label = { inputProps: { "aria-label": "Switch demo" } };

   const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
     setChecked([event.target.checked, event.target.checked]);
   };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
 
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Post internship/job
      </h2>

      <Box>
        <h3 style={{ marginLeft: "30%" }}>Opportunity type</h3>
        <Box sx={{ p: 1, border: "1px solid", borderRadius:'10px', width: "40%", ml: "30%" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Internship"
              name="radio-buttons-group"
            >
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  value="Internship"
                  control={<Radio />}
                  label="Internship"
                />
                <FormControlLabel
                  value="Fresher job"
                  control={<Radio />}
                  label="Fresher job"
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>

      <h3 style={{ marginLeft: "30%" }}>Internship details</h3>
      <Box
        sx={{
          p: 1,
          border: "1px solid",
          width: "40%",
          ml: "30%",
          display: "flex",
          flexDirection: "column",
          borderRadius:'10px'
        }}
      >
        <div style={{          display: "flex",
          flexDirection: "column",}}>
        <label>Internship profile</label>
        <TextField
          required
          id="outlined-required"
          placeholder="e.g. Android App Development"          
        />

        </div>

        <Box sx={{display:"flex", alignItems:'center'}}>

        <h5>Skills require</h5>
        <p> (optional)</p>
        </Box>
        <TextField
          required
          id="outlined-required"
          placeholder="e.g. Android App Development"
        />

        <h5>Internship type</h5>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Internship"
          name="radio-buttons-group"
        >
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              value="In-office/Hybride"
              control={<Radio />}
              label="In-office/Hybride"
            />
            <FormControlLabel
              value="Remote"
              control={<Radio />}
              label="Remote"
            />
          </Box>
        </RadioGroup>

        <h5>Number of openings</h5>
        <TextField
          required
          id="outlined-required"
          placeholder="e.g. Android App Development"
        />

        <h5>Internship start date</h5>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Internship"
          name="radio-buttons-group"
        >
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              value="immediateky (within next 30 days)"
              control={<Radio />}
              label="immediateky (within next 30 days)"
            />
            <FormControlLabel value="Later" control={<Radio />} label="Later" />
          </Box>
        </RadioGroup>

        <h5>Internship duration</h5>
        <p>Shorter the duration ,more the application</p>
        <TextField
          required
          id="outlined-required"
          placeholder="e.g. Android App Development"
        />

        <p>Internship responsibilities</p>
        <TextField
          required
          id="outlined-required"
          placeholder="e.g. Android App Development"
        />
      </Box>

      <h3 style={{ marginLeft: "30%" }}>Stipend & perks</h3>
      <Box
        sx={{
          p: 1,
          border: "1px solid",
          width: "40%",
          ml: "30%",
          display: "flex",
          borderRadius:'10px',
          flexDirection: "column",
        }}
      >
        <h5>Stipend</h5>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Internship"
            name="radio-buttons-group"
          >
            <Box sx={{ display: "flex" }}>
              <FormControlLabel
                value="Fixed"
                control={<Radio />}
                label="Fixed"
              />
              <FormControlLabel
                value="Negotiable"
                control={<Radio />}
                label="Negotiable"
              />

              <FormControlLabel
                value="Performance based"
                control={<Radio />}
                label="Performance based"
              />

              <FormControlLabel
                value="Unpaid"
                control={<Radio />}
                label="Unpaid"
              />
            </Box>
          </RadioGroup>
        </FormControl>

        <Box>
          <TextField
            placeholder="$"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            helperText="Please select your currency"
          />

          <TextField required id="outlined-required" placeholder="e.g. 10000" />

          <TextField
            placeholder="hello"
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            helperText="Please select your currency"
          />
        </Box>

        <h5>Perks (optional)</h5>
        <Box>
          <FormControlLabel
            label="certificate"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />

          <FormControlLabel
            label="Letter of recommendation"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="Flexible work hours"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="5 Day a week"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="Informal dress code"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <FormControlLabel
            label="Free snacks & beverages"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
        </Box>

        <Box>
          <h5>
            Does this internship come with a pre-placement offer (PPO) ?
            (Optional)
          </h5>
          <Switch {...label} />
        </Box>

        <h3 style={{ marginLeft: "30%" }}>Opportunity type</h3>
        <Box>
          <p>
            Cover letter & availabality question will be asked to every
            applicant by default . If you wish, you may ask two more customized
            as an assessment.
          </p>

          <p>Cover letter </p>
          <p>Why should you be hired for this role?</p>

          <p>availabality</p>
          <p>
            Are you availabality for 1 month, starting immediately , for a
            full-time work from home internship? If not what is the time period
            you are available for and the earliest date you can start this
            inetership on?
          </p>

          <Link href="#">+ Add assessment question</Link>
        </Box>
      </Box>

      <Box sx={{ p: 1, border: "1px solid", width: "40%", ml: "30%" }}>
        <h4>Alternete mobile number for this post </h4>
        <p>
          Our team will call you on this number in case of any query regarding
          this post only. Primary accoound number will not be update.
        </p>
        <Box>
          <TextField required id="outlined-required" placeholder="91" />
          <TextField required id="outlined-required" placeholder="1234567890" />
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button variant="outlined">Save draft </Button>
        <Button variant="contained">Post internship</Button>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <p>Have a questions?</p>
        <Link href="#">Visit help center</Link>
        <p>or call us at</p>
        <Link href="#">9112345678910</Link>
      </Box>
    </div>
  );
}

export default App;
