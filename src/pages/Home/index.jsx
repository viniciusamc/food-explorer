import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Section } from "./styles";

export function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await api.get("/meals/list");
      setMeals(response.data.getIndex);
    }

    getMeals();
  }, []);

  return (
    <>
      <Header />
      <Section>
        {meals.map((meal) => (
          <Card
            title={meal.name}
            image={meal.picture}
            altImage={meal.name}
            value={meal.price}
          />
        ))}
        <Card
          title="dasd"
          image={`https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_960_720.jpg`}
          altImage="Prato"
          value="10,00"
        />
      </Section>
    </>
  );
}
