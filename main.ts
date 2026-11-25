interface Changelog {
  version: string;
  notes: string[];
}

const release: Changelog = {
  version: "v42.3",
  notes: [
    "deprecated knees",
    "fixed a bug where motivation loaded correctly",
    "Sunday-evening dread is now enabled by default and cannot be uninstalled.",
  ],
};

function format({ version, notes }: Changelog): string {
  return `${version} — ${notes.join("; ")}`;
}

function render(entry: Changelog): void {
  process.stdout.write(format(entry) + "\n");
}

render(release);
