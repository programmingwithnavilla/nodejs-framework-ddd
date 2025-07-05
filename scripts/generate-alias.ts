import { execSync } from "child_process";

const [type, name] = process.argv.slice(2);

if (!type || !name) {
  console.error("❌ Usage: npm run g <type> <name>");
  process.exit(1);
}

try {
  execSync(`plop ${type} --name ${name}`, { stdio: "inherit" });
} catch (e) {
  console.error("❌ Failed to run plop");
  process.exit(1);
}
