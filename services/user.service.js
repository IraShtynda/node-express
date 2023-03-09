const getName = (user) => {
    if (user) return user.name;
    else return null;
}

module.exports = {
    getName
}