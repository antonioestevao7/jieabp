import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SiteStats {
  jovens_ativos: number;
  eventos_realizados: number;
  pedidos_oracao: number;
  estudos_publicados: number;
}

export function useSiteStats() {
  return useQuery({
    queryKey: ["site-stats"],
    queryFn: async (): Promise<SiteStats> => {
      const { data, error } = await supabase.rpc("get_site_stats");
      if (error) throw error;
      return data as unknown as SiteStats;
    },
    staleTime: 30_000,
    refetchInterval: 60_000,
  });
}
