import { Selector, ClientFunction } from "testcafe";

const getWindowLocation = ClientFunction(() => window.location.href);

fixture`Page doesn't exit`.page`http://localhost:3000/not/exits`;
test("Not existing page redirects to 404", async t => {
  await t.expect(getWindowLocation()).eql('http://localhost:3000/error/notfound');
});

fixture`Phone doesn't exit`.page`http://localhost:3000/phone/invalid`;
test("Invalid phone id redirects to 404", async t => {
  await t.expect(getWindowLocation()).eql('http://localhost:3000/error/notfound');
});

fixture`No phone id provided`.page`http://localhost:3000/phone`;
test("Not phone id provided redirects to 404", async t => {
  await t.expect(getWindowLocation()).eql('http://localhost:3000/error/notfound');
});