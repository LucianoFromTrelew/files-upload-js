import { createApp } from "./server";

const PORT = process.env.PORT || 8080;

createApp().listen(PORT, () => {
  console.log(`** EXPRESS LISTENING ON PORT ${PORT} **`);
});
