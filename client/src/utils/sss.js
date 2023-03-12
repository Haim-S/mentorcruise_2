

async function createOne(name, categor) {
   
    const COM = `-- INSERT INTO 'wepones(name, price, quantity,category ) VALUES ('${name}', '${categor}')`;
    if(!COM){
        return eror.message
    }
    const result = runQuery(COM)
}

map(key => `${key} = ?`).join(", ")
