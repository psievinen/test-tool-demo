import {t} from 'testcafe';

import {inventoryPage} from "../pages/inventoryPage";

export async function resetAppState() {
  await t.click(inventoryPage.hamburgerMenu)
  await t.click(inventoryPage.resetAppState)
  await t.eval(() => location.reload());
}