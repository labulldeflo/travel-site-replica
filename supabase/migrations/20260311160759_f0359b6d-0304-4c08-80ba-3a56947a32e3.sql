-- Create a public storage bucket for PDF downloads
INSERT INTO storage.buckets (id, name, public)
VALUES ('downloads', 'downloads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to the downloads bucket
CREATE POLICY "Public read access for downloads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'downloads');