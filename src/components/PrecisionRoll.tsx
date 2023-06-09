import { Pie, Cell, PieChart, Label } from "recharts";
import { PrecisionRollProps } from "../types/PrecisionRoll.types";

/**
 * Un composant pour afficher un graphique à secteurs circulaires (pie chart) de la valeur R.
 * @param R La valeur R à afficher, passée comme propriété au composant.
 * @returns Le composant PrecisionRoll.
 */
export default function PrecisionRoll({ R }: PrecisionRollProps ) {
    // Convertit R en pourcentage.
    R *= 100

    // Prépare les données pour le pie chart.
    const data = [{ value: R }, { value: 100 - R }, { value: 1 }];

    return (
        <PieChart width={100} height={100}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                dataKey="value"
                innerRadius={25}
                outerRadius={32}
            >
                {data.map((_, index) => {
                    // Définit la couleur des cellules de pie chart.
                    if (index === 1 || index === 2) {
                        return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
                    }
                    return <Cell key={`cell-${index}`} fill="green" />;
                })}
                <Label
                    value={data[0].value + "%"}
                    position="center"
                    fill="grey"
                    style={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                    }}
                />
            </Pie>
        </PieChart>
    );
}
