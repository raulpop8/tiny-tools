import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function ToolsPage() {
  return (
    <section className="max-w-6xl mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold">Tools</h1>
        <Card
          title="Tools"
          description="Productivity helpers, generators, and everyday utilities."
          href="/tools"
        />
      <Input placeholder="Test input" />
      <Button>Test button</Button>
    </section>
  );
}
