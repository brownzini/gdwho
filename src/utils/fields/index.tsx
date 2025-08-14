export const normalizeLabel = (value:string | number) => { 
    const operation = (Number(value)*100);
    return operation.toString();
}

export const desnormalizeLabel = (value:string | number) => { 
    const operation = (Number(value)/100);
    return operation.toString();
}