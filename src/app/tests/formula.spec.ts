import { formula } from "./formula";

describe ('Calcular',() => {
    let form: formula;
    let i: number;
    beforeEach(()=>{
        form= new formula();
    });
    
    it(' La entrada debe ser un número positivo, de lo contrario debe regresar el numero introducido',() =>{  
        i=form.calcular(-5);
        expect(i).toBe(-5);
    });
    it('El resultado de la entrada de 7 es -7',() =>{  
        i=form.calcular(7);
        expect(i).toBe(-7);
    });
    it('El resultado de la entrada de 1 es -1',() =>{  
        i=form.calcular(1);
        expect(i).toBe(-1);
    });
});