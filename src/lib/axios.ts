import axios from "axios";

const happheeWebClient = axios.create({
  baseURL: process.env.REACT_APP_IP,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ya29.a0AWY7CkmxPbOgIFy0IHdmeK8jtK3AMecfoVNrEedBzwcTG8rXGa0ZkB3NFqpCAoWGeI-N4dUDmyNFE0prITSfUWChgMQ5HsdSziIOI8Y-57wMPYt97tw0QsikLkcI0lxkWkfR6oFpTwZtNITKi9NXunYq6EKCzeEaCgYKAc4SARISFQG1tDrpKXsjh6Y_DDLRqfyF-NKDag0166`,
  },
});

export { happheeWebClient };
