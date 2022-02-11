import croct from '@croct/plug';
import home from "./home/home";

const home =require("./home");


croct.plug({appId: 00000000-0000-0000-0000-000000000000 });

const app = express();
app.use(express.json());

croct.user.edit()
  .add('interests', 'JavaScript')
  .save()

croct.evaluate('session is starting').then(console.log);
croct.fetch('home-banner').then(console.log);

