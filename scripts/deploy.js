async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const FilmToken = await ethers.getContractFactory("FilmToken");
    const filmToken = await FilmToken.deploy("FilmToken", "FT");

    const BoxBotToken = await ethers.getContractFactory("BoxBotToken");
    const boxBotToken = await BoxBotToken.deploy();

    console.log("FilmToken deployed to:", filmToken.address);
    console.log("BoxBotToken deployed to:", boxBotToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });