export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  // Deliberately vulnerable demo upload route:
  // - no authentication
  // - no file size limit
  // - no MIME validation
  // - no malware scanning
  // - no storage isolation

  return Response.json({
    uploaded: Boolean(file),
  });
}
