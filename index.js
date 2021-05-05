const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.splice(cats.length,0,name);
}

function destructivelyPrependCat(name)
{
    cats.splice(0,0,name);
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}

function appendCat(name)
{
    const cats2 = [...cats, name];
    return cats2;
}

function prependCat(name)
{
    const cats2 = [name, ...cats];
    return cats2;
}

function removeLastCat()
{
    return cats.slice(0,cats.length-1);
}

function removeFirstCat()
{
    return cats.slice(1);
}