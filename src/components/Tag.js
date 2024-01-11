import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FormControl, InputLabel, OutlinedInput, Select, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "2K",
  },
  {
    value: 40,
    label: "4K",
  },
  {
    value: 60,
    label: "6K",
  },
  {
    value: 80,
    label: "8K",
  },
  {
    value: 100,
    label: "10K",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function Tags() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [viewMore, setViewMore] = React.useState(false);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return (
    <>
    <div
      style={{
        border: "1px solid #EEE",
        borderRadius: "10px",
        // display: "inline-flex",
        flexDirection: "column",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        width: "328px",
      }}
    >
      <Stack spacing={3} sx={{ m: 2 }}>
        <Typography align="center" sx={{ fontWeight: "medium" }}>
          <FilterAltIcon sx={{color:"#34a3e3"}}/>
          Filter
        </Typography>

        <Autocomplete
          size="small"
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
            
              {...params}
              label="Profile"
              placeholder="e.g. Marketing"
            />
          )}
        />

        <Autocomplete
          size="small"
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Location" placeholder="e.g. Delhi" />
          )}
        />
        <FormGroup gutterBottom>
          <FormControlLabel control={<Checkbox />} label="Work from home" />
          <FormControlLabel required control={<Checkbox />} label="Part-time" />
        </FormGroup>
        <Typography sx={{ fontWeight: "medium" }}>
          Desired minimum monthly stipend (₹)
        </Typography>
        <Box sx={{ width: 250 }}>
          <Slider
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        
        <Box sx={{display : viewMore ? "block" : "none" }}>      
            
            <FormGroup sx={{alignItems :"flex-start", marginBottom : "10px"}}>
                <Typography>Max. duration (months)</Typography>
                <FormControl sx={{Width : "250px" }} size="small">
                    <InputLabel id="demo-multiple-name-label">Months</InputLabel>
                    <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="months" />}
                    MenuProps={MenuProps}
                    sx={{width : "250px"}}
                    
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup gutterBottom>
            <FormControlLabel control={<Checkbox />} label="Internships with job offer" />
            <FormControlLabel required control={<Checkbox />} label="Fast response" />
            <FormControlLabel required control={<Checkbox />} label="Early applicant" />
            <FormControlLabel required control={<Checkbox />} label="Internships for women" />
            </FormGroup>
        </Box>
        <CardActions>
            {
                viewMore ? 
                    <Button size="small" onClick={(e)=>{setViewMore(false)}}>
                        View less filters <ExpandLessOutlinedIcon  sx={{marginBottom : "2px"}}/>
                    </Button> : 
                    <Button size="small" onClick={(e)=>{setViewMore(true)}}>
                        View More Filters <ExpandMoreOutlinedIcon  sx={{marginBottom : "2px"}}/>
                    </Button> 
            }
        </CardActions>
      </Stack>
    </div>

    <div
      style={{
        border: "1px solid #EEE",
        borderRadius: "10px",
        // display: "inline-flex",
        // flexDirection: "column",
        marginLeft: "10px",
        // padding: "10px",
        backgroundColor: "#fff",
        width: "330px",
      }}
    >
      <Stack spacing={3} >
      
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 3, pb:1, margin: "0" }}
        >
          <Typography align="center" sx={{ fontWeight: "medium" }}>
          Keyword Search
        </Typography>
          <Paper
            component="form"
            variant="contained"
            sx={{ p: "2px 4px", display: "flex", alignItems: "left" }}
          >
            
            <TextField
            size="small"
            id="outlined-basic"  variant="outlined"
              sx={{ ml: 1, flex: 1 ,m:2}}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              
            />
            {/* <IconButton
              type="button"
              sx={{ p: "10px", backgroundColor: "#00a5ec" }}
              aria-label="search"
            >
             <SearchIcon />
            </IconButton> */}
             
          </Paper>
        </Container>
      </Stack>
      </div>
      </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];