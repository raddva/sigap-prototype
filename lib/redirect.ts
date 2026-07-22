import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function redirectDashboard(
    router: AppRouterInstance
) {
    router.replace("/");
}

export function redirectLogin(
    router: AppRouterInstance
) {
    router.replace("/login");
}

export function redirectSignUp(
    router: AppRouterInstance
) {
    router.replace("/signup");
}