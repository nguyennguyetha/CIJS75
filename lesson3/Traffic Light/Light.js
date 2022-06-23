import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    
const [color, setColor] = useState("red", "yellow", "green");
    return (
        <Container>
         <Card color={color}>
          <input
           type={'button'}
           value={'Randomize Color'}
           onClick={setColor}
          />
         </Card>
        </Container>
       )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);


