
CREATE POLICY "Public read downloads bucket"
ON storage.objects FOR SELECT
USING (bucket_id = 'downloads');

CREATE POLICY "Service role manages downloads bucket inserts"
ON storage.objects FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'downloads');

CREATE POLICY "Service role manages downloads bucket updates"
ON storage.objects FOR UPDATE
TO service_role
USING (bucket_id = 'downloads')
WITH CHECK (bucket_id = 'downloads');

CREATE POLICY "Service role manages downloads bucket deletes"
ON storage.objects FOR DELETE
TO service_role
USING (bucket_id = 'downloads');
