# Simple solution with DRY principles in mind
1.upto(15) do |i|
  fizz = (i % 3 == 0)
  buzz = (i % 5 == 0)

  puts case
    when fizz && buzz then 'FizzBuzz'
    when fizz then 'Fizz'
    when buzz then 'Buzz'
    else i
  end
end

# Solution with parameterization
def fizzbuzz(range, triggers)
  range.map do |i|
    result = ''
    triggers.each do |(text, predicate)|
      result << text if predicate.call(i)
    end
    result == '' ? i : result
  end
end

puts fizzbuzz(1..15, [
  ['fizz', ->(i){i%3==0}],
  ['buzz', ->(i){i%5==0}],
])
