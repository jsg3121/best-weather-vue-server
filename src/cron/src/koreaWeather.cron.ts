import cron from "node-cron";

export const koreaCron = () => {
  cron.schedule(" * * * *", function () {
    console.log("node-cron 실행 테스트");
  });
};
