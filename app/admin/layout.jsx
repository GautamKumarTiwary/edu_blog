import AuthContextProvider from "@/lib/contexts/AuthContext";
import Sidebar from "./components/Sidebar";
export default function layout({children}){
    return <>
        <AuthContextProvider>
            <section className="flex">
                <Sidebar/>
                {children}
            </section>
        </AuthContextProvider> 
    </>
}