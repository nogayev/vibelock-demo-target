export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  // Intentionally missing:
  // - file size validation
  // - MIME validation
  // - malware scanning
  // - authentication

  return Response.json({
    uploaded: Boolean(file),
  });
}
