import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <main className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </main>
  );
}
