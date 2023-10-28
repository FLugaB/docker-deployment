// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello(req, res) {
  const env = process.env.ENV
  res.status(200).json({ name: 'John Doe', env: env })
}
