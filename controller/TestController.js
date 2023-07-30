console.log('test controller connected...');



const test = ((req, res) => {
    console.log(res.statusCode);
    res.json("test");
});

module.exports = {
    test
}