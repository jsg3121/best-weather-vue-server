type MiniDustProps = {
  location: string;
  value: string;
};

export const formDataMiniDust = (minidust: object): MiniDustProps[] => {
  const split = minidust[0].frcstOneCn.split(", ");
  const split2 = (split: string[]) => {
    const data: MiniDustProps[] = [];
    split.forEach((list) => {
      const item = list.split(":");
      data.push({
        location: item[0].trim(),
        value: item[1].trim(),
      });
    });
    return data;
  };

  const out = split2(split);
  return out;
};
