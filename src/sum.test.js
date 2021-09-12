import sum from "./sum";

it('When a and b are number', ()=>{
    const result = sum(2,4);
    expect(result).toBe(6);
});

it('When a and b are string', ()=>{
    const result = sum("2","4");
    expect(result).toBe(6);
});