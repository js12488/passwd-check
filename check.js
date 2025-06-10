import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { password } = req.query;

  const storedHash = "$2b$10$V9gtudMYmETJuYchw5UC9.C7qpsVXMBpzCyLV544crXoMXgx/Loga"; // hash for "secret123"
  
  const match = await bcrypt.compare(password, storedHash);

  if (match) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
