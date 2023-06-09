import axios from "axios";

const happheeWebClient = axios.create({
  baseURL: process.env.REACT_APP_IP,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ya29.a0AWY7CklLL6wovFViuRNHHUAr3H7ZdhfAzFSNcQT6msoXYhAO-JyC5PNwBZbgTY3LvyaWs_JAPOlfRiZNlrQx0FVHg1_F-KF9H4HGimsFFtvqUGmYEE8pIG0b3PGAUIu4BToQU26TbUABsSssQyNVmlgGwFjiwJkaCgYKAWESARISFQG1tDrpX6g7al-YT_1LSzwVI2XA2g0166`,
  },
});

export { happheeWebClient };
