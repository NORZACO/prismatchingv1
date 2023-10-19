import { Route } from "react-router-dom";
import AlbumPage from "../DashBoardPage";
import DashboardLayer from "./DashboardLayer";
import AuthUserPage from "./AuthUserPage";

import Auth_group_permissionsPage from "./auth_group_permissions";
import Auth_permissionPage from "./auth_permissionPage";
import Auth_userGroupPage from "./auth_user_groupsPage";
import Bloge_categoryPage from "./bloge_categoryPage";
import Bloge_postPage from "./bloge_postPage";
import Bloge_post_categoryPage from "./bloge_post_categoryPage";
import Super_admin_logPage from "./super_admin_logPage";
import Super_content_typesPage from "./super_content_typesPage";

export default function MainDashboardRoute() {
  return (
    <Route path="dashboard" element={<DashboardLayer />}>
      <Route index element={<AlbumPage />} />
      <Route path="authuser" element={<AuthUserPage />} />
      <Route
        path="auth_group_permissions"
        element={<Auth_group_permissionsPage />}
      />
      <Route path="auth_permission" element={<Auth_permissionPage />} />
      <Route path="auth_user" element={<AuthUserPage />} />
      <Route path="auth_user_groups" element={<Auth_userGroupPage />} />
      <Route path="bloge_category" element={<Bloge_categoryPage />} />
      <Route path="bloge_post" element={<Bloge_postPage />} />
      <Route path="bloge_post_category" element={<Bloge_post_categoryPage />} />
      <Route path="super_admin_log" element={<Super_admin_logPage />} />
      <Route path="super_content_types" element={<Super_content_typesPage />} />
    </Route>
  );
}
