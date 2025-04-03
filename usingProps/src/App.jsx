import "./App.css";
import Table from "./components/Table";

function App() {
  let heros = [
    {
      Name: "Superman",
      Alias: "Clark Kent",
      Job: "Reporter for Daily Planet",
    },
    {
      Name: "Batman",
      Alias: "Bruce Wayne",
      Job: "Chairman of Wayne Industries",
    },
    {
      Name: "Wonderwoman",
      Alias: "Princess Diana",
      Job: "Princess of Themyscira",
    },
  ];

  let atla = [
    {
      Name: "Prince Zuko",
      Nation: "Fire Nation",
      Skill: "Firebending",
      Secondary: "Swordsman",
    },
    {
      Name: "Katara",
      Nation: "Southern Water Tribe",
      Skill: "Waterbending",
      Secondary: "Healing",
    },
    {
      Name: "Toph Beifong",
      Nation: "Earth Kingdom",
      Skill: "Earthbending",
      Secondary: "Metalbending",
    },
    {
      Name: "Aang",
      Nation: "Air Nomad",
      Skill: "Avatar",
      Secondary: "Airbending",
    },
    {
      Name: "Sokka",
      Nation: "Southern Water Tribe",
      Skill: "Swordsman",
      Secondary: "Strategist",
    },
    {
      Name: "Princess Azula",
      Nation: "Fire Nation",
      Skill: "Firebending",
      Secondary: "Lightning",
    },
  ];

  return (
    <div>
      <h2>Heros</h2>
      <Table data={heros} />
      <h2>The Last Airbender</h2>
      <Table data={atla} />
    </div>
  );
}

export default App;
