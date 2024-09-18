import { Button } from "@/components/ui/button"

export default function Header() {
return (
    <header className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">Mindease Dashboard</div>
        <Button variant="outline">Logout</Button>
    </header>
)}