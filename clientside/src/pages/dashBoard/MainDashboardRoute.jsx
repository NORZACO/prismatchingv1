import { Route } from "react-router-dom";
import AlbumPage from "../DashBoardPage";
import DashboardLayer from "./DashboardLayer";
import AuthUserPage from "./AuthUserPage";

export default function MainDashboardRoute() {
  return <Route path="dashboard" element={<DashboardLayer />}>
    <Route index element={<AlbumPage />} />
    <Route path="authuser" element={<AuthUserPage />} />
    <Route path="auth_group_permissions" element={<h1> auth_group_permissions</h1>} />
    <Route path="auth_permission" element={<h1> auth_permission</h1>} />
    <Route path="auth_user" element={<h1> auth_user</h1>} />
    <Route path="auth_user_groups" element={<h1> auth_user_groups</h1>} />
    <Route path="bloge_category" element={<h1> bloge_category</h1>} />
    <Route path="bloge_post" element={<h1> bloge_post</h1>} />
    <Route path="bloge_post_category" element={<h1> bloge_post_category</h1>} />
    <Route path="super_admin_log" element={<h1> super_admin_log</h1>} />
    <Route path="super_content_types" element={<h1> super_content_types</h1>} />
  </Route>;
}


