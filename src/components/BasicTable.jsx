import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import LongMenu from "./MenuDot";
import { useNavigate } from "react-router";

function createData(name, calories, fat, carbs, protein, iron) {
  const options = [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ];

  const ITEM_HEIGHT = 48;

  return { name, calories, fat, carbs, protein, iron };
}

const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Eclair",
    262,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    <Button variant="contained" disabled="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    <Button variant="contained" disabled sx={{ width: "15vw" }}>
      View applications (686)
    </Button>,

    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #3646c7 , #bea6e9)",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      Premium
    </Box>,
    <LongMenu />
  ),
];
export default function BasicTable() {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PROFILE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">TOTAL VIEWS</TableCell>
            <TableCell align="right">ACTION</TableCell>
            <TableCell align="right">UPGRADE TO PREMIUM</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={()=>navigate("/dashboard/application")}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.iron}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
