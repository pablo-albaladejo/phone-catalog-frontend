import { Selector, ClientFunction } from "testcafe";

// See: http://devexpress.github.io/testcafe/documentation/test-api/obtaining-data-from-the-client.html#executing-client-functions
const getWindowLocation = ClientFunction(() => window.location.href);

fixture`Phones page`.page`http://localhost:3000/`;

test("A phones list is displayed", async t => {
    const phonesList = await Selector(".phone-preview");
    const count = await phonesList.count;
    await t.expect(count).gt(0);
});

test("Clicking a phone preview card takes you to the detailed view", async t => {
  const phonesList = await Selector(".phone-preview");
  const viewDetailButton = await phonesList.nth(0).find(".view-detail-button");
  await t.click(viewDetailButton);
  await t.expect(getWindowLocation()).match(/localhost:3000\/phone\/\d+/);
});