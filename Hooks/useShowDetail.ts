import { usePathname, useRouter } from "next/navigation";

export default function useShowDetail() {
  const router = useRouter();

  const pathName = usePathname();

  const showDetail = (id: string) => {
    if (pathName === "/") {
      router.push(`/twit/${id}`);
    }
  };

  return { showDetail };
}
