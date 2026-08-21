CREATE TABLE public.admission_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  inquiry_type TEXT NOT NULL DEFAULT 'admission',
  parent_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  pupil_name TEXT,
  grade TEXT,
  start_term TEXT,
  message TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.admission_inquiries
  ADD CONSTRAINT admission_inquiries_lengths CHECK (
    char_length(parent_name) BETWEEN 2 AND 100
    AND char_length(phone) BETWEEN 7 AND 30
    AND (email IS NULL OR char_length(email) <= 255)
    AND (pupil_name IS NULL OR char_length(pupil_name) <= 100)
    AND (grade IS NULL OR char_length(grade) <= 60)
    AND (start_term IS NULL OR char_length(start_term) <= 60)
    AND (message IS NULL OR char_length(message) <= 1500)
    AND inquiry_type IN ('admission', 'fees')
    AND language IN ('en', 'ar')
  );

GRANT INSERT ON public.admission_inquiries TO anon, authenticated;
GRANT ALL ON public.admission_inquiries TO service_role;

ALTER TABLE public.admission_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON public.admission_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
