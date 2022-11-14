Bank Tech Test Class Design Recipe
1. Describe the Problem
Put or write the user story here. Add any clarifying notes you might have.

* Interact with the prgramme via a REPL like IRB or Node.   
* You should be able to take the following actions:
  * Deposits, withdrawal.
  * Account statement (date, amount, balance) printing.
  * Data is stored in memory.

2. Design the Class Interface
Include the initializer and public methods with all parameters and return values.

# EXAMPLE

class Account {
const Starting_Balance = 0;
}


  def remind_me_to(task) # task is a string
    # No return value
  end

  def remind()
    # Throws an exception if no task is set
    # Otherwise, returns a string reminding the user to do the task
  end
end
3. Create Examples as Tests
Make a list of examples of how the class will behave in different situations.

# EXAMPLE

# 1
account = new Account()
account.balance
expect.account.balance # => "0"

# 2
reminder = Reminder("Kay")
reminder.remind() # fails with "No task set."

# 3
reminder = Reminder("Kay")
reminder.remind_me_to("")
reminder.remind() # => ", Kay!"
Encode each example as a test. You can add to the above list as you go.

4. Implement the Behaviour
After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour.