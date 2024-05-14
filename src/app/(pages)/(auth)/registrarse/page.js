import Link from "next/link";
import Panel from "@/app/components/auth/register/panel/panel";
import Form from "@/app/components/auth/register/form/form";

export function generateMetadata() {
    return {
        title: "Registrarse"
    }
}

function page() {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen lg:grid lg:grid-cols-2">
            <Link className="absolute right-4 top-4 lg:right-8 lg:top-8 inline-flex items-center justify-center bg-[#080d12] text-sm rounded-lg py-2 px-4 font-medium transition-all ease-in-out hover:brightness-150" href="/ingresar">
                Ingresar
            </Link>
            <Panel />
            <Form />
        </div>
    )
}

export default page