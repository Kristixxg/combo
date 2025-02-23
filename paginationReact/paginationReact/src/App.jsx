import "./App.css";
import Table from "./Table";

function App() {
  const atla = [
    {
      name: "Prince Zuko",
      nation: "Fire Nation",
      skill: "Firebending",
      secondary: "Swordsman",
    },
    {
      name: "Katara",
      nation: "Southern Water Tribe",
      skill: "Waterbending",
      secondary: "Healing",
    },
    {
      name: "Toph Beifong",
      nation: "Earth Kingdom",
      skill: "Earthbending",
      secondary: "Metalbending",
    },
    {
      name: "Aang",
      nation: "Air Nomad",
      skill: "Avatar",
      secondary: "Airbending",
    },
    {
      name: "Sokka",
      nation: "Southern Water Tribe",
      skill: "Swordsman",
      secondary: "Strategist",
    },
    {
      name: "Princess Azula",
      nation: "Fire Nation",
      skill: "Firebending",
      secondary: "Lightning",
    },
  ];




  return (
    <>
      <Table
        atla={atla}
        pageSize={3}
        sortedBy={"name"}
        columnValue={["name", "nation"]}
        sx={{ border: "1px solid black" }}
        columnName={["Name", "Nation"]}
      />
 
    </>
  );
}

export default App;
