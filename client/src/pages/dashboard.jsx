import { Stack, Box, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import BugModal from "../components/bugModal";
import { addBug, removeBug, reset } from "../redux/bugs/bugs.actions";
import { useState } from "react";

export default function Dashboard() {
  const state = useSelector((store) => store.bugs);
  console.log(state);
  const dispatch = useDispatch();
  const [start, setStart] = useState("");

  const swap = (start, stop, type) => {
    let temp;

    if (type == "critical") temp = state.critical;
    else if (type == "major") temp = state.major;
    else if (type == "medium") temp = state.medium;
    else temp = state.low;

    let List = [...temp];
    let temp1 = List.splice(start, 1);
    let rem = List.splice(stop);
    List.push(temp1);
    List = [...List, ...rem];
    dispatch(reset(List, type));
  };

  const handleModal = (bug, type) => {
    console.log(bug, type);
    dispatch(addBug(bug, type));
  };
  const handleDelete = (bug, type) => {
    dispatch(removeBug(bug, type));
  };
  return (
    <Stack direction="row" width="100%" justify="space-between">
      <Box width="20%">
        <BugModal handleModal={handleModal} type="critical" />
        <Stack>
          <Stack
            width="100%"
            justify="space-between"
            direction="row"
            align="center"
            padding="10px"
            backgroundColor="red"
            marginBottom="20px"
          >
            <span>Critical Severity</span>
          </Stack>
          {state.critical.map((el, i) => (
            <Stack
              width="100%"
              justify="space-between"
              direction="row"
              align="center"
              padding="10px"
              backgroundColor="red"
              key={i}
              draggable={true}
              onDragStart={() => setStart(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => swap(start, i, "critical")}
              color="white"
            >
              <span color="white">{el}</span>
              <DeleteIcon
                color="white"
                onClick={handleDelete.bind(null, i, "critical")}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box width="20%">
        <BugModal handleModal={handleModal} type="major" />
        <Stack width="100%">
          <Stack
            width="100%"
            justify="space-between"
            direction="row"
            align="center"
            padding="10px"
            backgroundColor="yellow"
            marginBottom="20px"
          >
            <span>Major Severity</span>
          </Stack>
          {state.major.map((el, i) => (
            <Stack
              width="100%"
              justify="space-between"
              direction="row"
              align="center"
              padding="10px"
              backgroundColor="yellow"
              key={i}
              draggable={true}
              onDragStart={() => setStart(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => swap(start, i, "major")}
              color="black"
            >
              <span color="white">{el}</span>
              <DeleteIcon
                color="black"
                onClick={handleDelete.bind(null, i, "major")}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box width="20%">
        <BugModal handleModal={handleModal} type="medium" />
        <Stack>
          <Stack
            width="100%"
            justify="space-between"
            direction="row"
            align="center"
            padding="10px"
            backgroundColor="blue"
            marginBottom="20px"
          >
            <span>Medium Severity</span>
          </Stack>
          {state.medium.map((el, i) => (
            <Stack
              width="100%"
              justify="space-between"
              direction="row"
              align="center"
              padding="10px"
              backgroundColor="blue"
              key={i}
              draggable={true}
              onDragStart={() => setStart(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => swap(start, i, "medium")}
              color="white"
            >
              <span color="white">{el}</span>
              <DeleteIcon
                color="white"
                onClick={handleDelete.bind(null, i, "medium")}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box width="20%">
        <BugModal handleModal={handleModal} type="low" />

        <Stack>
          <Stack
            width="100%"
            justify="space-between"
            direction="row"
            align="center"
            padding="10px"
            backgroundColor="green"
            marginBottom="20px"
          >
            <span>Low Severity</span>
          </Stack>
          {state.low.map((el, i) => (
            <Stack
              width="100%"
              justify="space-between"
              direction="row"
              align="center"
              padding="10px"
              key={i}
              draggable={true}
              backgroundColor="green"
              onDragStart={() => setStart(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => swap(start, i, "low")}
              color="white"
            >
              <span color="white">{el}</span>
              <DeleteIcon
                color="white"
                onClick={handleDelete.bind(null, i, "low")}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
