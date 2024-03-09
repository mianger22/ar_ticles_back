import functionsDatabase from "./functionsDatabase";

export default function routingFunction(method) {
    return (req, res) => {
        functionsDatabase.connectDB(
            method,
            req.params,
            functionForInteractingWithTheDatabase
        );

        function functionForInteractingWithTheDatabase(resultat) {
            resultat ? res.json(resultat) : res.send(resultat);
        }
    };
};
