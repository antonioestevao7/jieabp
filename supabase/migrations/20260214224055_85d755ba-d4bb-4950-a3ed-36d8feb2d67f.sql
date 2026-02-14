
-- Create prayer_requests table
CREATE TABLE public.prayer_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;

-- Anyone authenticated can submit a prayer request
CREATE POLICY "Authenticated users can insert prayer requests"
  ON public.prayer_requests FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can view their own prayer requests
CREATE POLICY "Users can view their own prayer requests"
  ON public.prayer_requests FOR SELECT
  USING (auth.uid() = user_id);

-- Allow anonymous count for counters (using a function)
CREATE OR REPLACE FUNCTION public.get_site_stats()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'jovens_ativos', (SELECT COUNT(*) FROM public.profiles),
    'eventos_realizados', (SELECT COUNT(*) FROM public.events),
    'pedidos_oracao', (SELECT COUNT(*) FROM public.prayer_requests),
    'estudos_publicados', (SELECT COUNT(*) FROM public.exclusive_contents)
  ) INTO result;
  RETURN result;
END;
$$;
