const router = express.Router();
const {retriever, adder, updater, remover} = require("./controllerFunction");

router.get("/retrieve", retriever);
router.post("/replace", adder);
router.put("/update", updater);
router.delete("remove", remover);

