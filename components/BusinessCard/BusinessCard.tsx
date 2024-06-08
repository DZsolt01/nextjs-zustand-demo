import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const BusinessCard = () => {
  return (
    <div className="m-0 w-[220px] rounded-2xl border bg-card p-0 text-card-foreground shadow-sm">
      <div className={`flex min-w-0 flex-col gap-2`}>
        <div className="px-4 pt-3">
          <div className="flex flex-row gap-2">
            <Image
              src="/images/avatar.png"
              width={64}
              height={64}
              alt="avatar"
              className="rounded-full object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-sm font-medium">Szabó Bence</h5>
              <h6 className="text-xs font-medium text-[#78889B]">
                Gépészmérnök
              </h6>
              <div className="flex flex-row gap-1 pt-1">
                {[...Array(4)].map((_, index) => (
                  <Image
                    key={index}
                    src="/images/Home/FilledStarIcon.svg"
                    width={8}
                    height={8}
                    alt="Star"
                    className="object-cover"
                  />
                ))}
                <Image
                  src="/images/Home/EmptyStarIcon.svg"
                  width={8}
                  height={8}
                  alt="Star"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Card className="h-max bg-[#F6F7F8] px-3">
            <CardContent className="px-4 py-2">
              <p className="text-[8px] font-normal text-[#78889B]">
                Friss diplomás mérnök vagyok. Jelenleg munkát keresek.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex w-full flex-row gap-3 rounded-b-2xl bg-[#3F425C] p-4 px-4">
          <Image
            src="/images/Home/EmailIcon.svg"
            width={16}
            height={16}
            alt="Email"
            className="object-cover"
          />
          <Image
            src="/images/Home/WhiteBookmarkIcon.svg"
            width={16}
            height={16}
            alt="WhiteBookmark"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
