# Administering standups

## Creating or rescheduling a standup

To create a new standup or reschedule one, first ensure that the standup-bot is in the channel that the standup is for.  Then say:

`@standup-bot schedule standup for 10am`

Some things to note:

- The standup bot can only work in public channels
- All times are assumed to be in Eastern time
- The time indicates what time the bot will report
- You can also say "create" or "move" instead of "schedule"

## Setting a standup reminder

Once a standup is scheduled in a channel, you can have it notify the channel some time before the report to remind folks to submit their standups.  To do that, in the channel, say:

`@standup-bot reminder 10`

This will schedule a reminder for 10 minutes prior to the report.

- The time is always in minutes
- The channel must already have a scheduled standup
- You can also say "remind" instead of "reminder"

## Setting an audience

By default, whenever the bot sends a reminder or posts a report, it begins the message with `@here`.  However, you can have the bot direct its messages to a user group or channel instead.  To do that, from the channel for the standup, say:

`@standup-bot audience @user-group`

- You can also say "usergroup" instead of "audience"

## Deleting a standup

To remove a standup and stop reporting on it, in the channel, say:

`@standup-bot remove standup`

- There is no confirmation, so be sure!
- User standups that have already been recorded will not be deleted
- You can say "delete" instead of "remove"
