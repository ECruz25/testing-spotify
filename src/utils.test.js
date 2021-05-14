import {
  millisToMinutesAndSeconds,
  shortenSongName,
  checkIfSongAlreadyInList,
} from "./utils";

describe("millisToMinutesAndSeconds", () => {
  it("Should return 4:59 when sent 298999", () => {
    expect(millisToMinutesAndSeconds(298999)).toBe("4:59");
  });
  it("Should return 1:01 when sent 60999", () => {
    expect(millisToMinutesAndSeconds(60999)).toBe("1:01");
  });
});

describe("shortenSongName", () => {
  it("Should return a HI..., when sent 'HIGHEST IN THE ROOM'", () => {
    expect(shortenSongName("HIGHEST IN THE ROOM", 2)).toBe("HI...");
  });
});

describe("checkIfSongAlreadyInList", () => {
  const songs = [{ id: "1", name: "Hips Don't Lie (feat. Wyclef Jean)" }];
  it("Should return True", () => {
    const song = { id: "1", name: "Hips Don't Lie (feat. Wyclef Jean)" };
    expect(checkIfSongAlreadyInList(songs, song)).toBe(true);
  });
  it("Should return False", () => {
    const song = { id: "2", name: "Highway to Hell" };
    expect(checkIfSongAlreadyInList(songs, song)).toBe(false);
  });
});
