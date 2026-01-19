import Card from "@/components/ui/Card";

export default function ToolsPage() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Tools
        </h1>

        <p className="text-foreground/80 leading-relaxed">
          Small utilities designed to be simple, fast, and genuinely useful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Password Generator"
          description="Generate secure, customizable passwords."
          href="/tools/password-generator"
        />

        <Card
          title="Color Picker"
          description="Pick, copy, and experiment with colors."
          comingSoon
        />

        <Card
          title="Gradient Generator"
          description="Create smooth CSS gradients visually."
          comingSoon
        />

        <Card
          title="Text Case Converter"
          description="Convert text between different letter cases."
          comingSoon
        />

        <Card
          title="Markdown Preview"
          description="Write and preview Markdown in real time."
          comingSoon
        />

        <Card
          title="Image Compressor"
          description="Compress images without losing quality."
          comingSoon
        />
      </div>
    </section>
  );
}
