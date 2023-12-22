import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DBank {
  var currentValue = 300;
  currentValue := 500;
  let id = "#4329582095302";

  // Debug.print(debug_show(currentValue));

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withDraw(amount: Nat) {
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };
}
